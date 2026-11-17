(() => {
  "use strict";

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");
  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      navigation.classList.toggle("is-open", open);
    });
    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
      });
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
      }
    });
  }

  const revealItems = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const estimator = document.querySelector("[data-estimator]");
  if (estimator) {
    const backupSlider = document.querySelector("#backup-hours");
    const backupOutput = document.querySelector("#backup-output");
    const result = {
      energy: document.querySelector("#energy-result"),
      peak: document.querySelector("#peak-result"),
      battery: document.querySelector("#battery-result"),
      inverter: document.querySelector("#inverter-result"),
      note: document.querySelector("#calc-note")
    };
    let latestSummary = "";

    if (backupSlider && backupOutput) {
      backupSlider.addEventListener("input", () => {
        backupOutput.textContent = backupSlider.value;
      });
    }

    const calculate = () => {
      let dailyWh = 0;
      let connectedW = 0;
      let selected = 0;
      estimator.querySelectorAll(".load-row").forEach((row) => {
        const checkbox = row.querySelector('input[type="checkbox"]');
        if (!checkbox || !checkbox.checked) return;
        const numbers = row.querySelectorAll('input[type="number"]');
        const quantity = Math.max(0, Number(numbers[0].value) || 0);
        const hours = Math.max(0, Math.min(24, Number(numbers[1].value) || 0));
        const wattsText = row.querySelector(".watt-value").textContent.replace(/[^0-9.]/g, "");
        const watts = Number(wattsText) || 0;
        dailyWh += watts * quantity * hours;
        connectedW += watts * quantity;
        selected += 1;
      });
      const backupHours = Number(backupSlider ? backupSlider.value : 8);
      const batteryKwh = (dailyWh * (backupHours / 24) / 1000 / 0.8) * 1.2;
      const inverterKw = connectedW / 1000 * 1.25;
      const energyKwh = dailyWh / 1000;
      const fmt = (value) => value.toFixed(1);
      result.energy.innerHTML = fmt(energyKwh) + " <small>kWh</small>";
      result.peak.innerHTML = fmt(connectedW / 1000) + " <small>kW</small>";
      result.battery.innerHTML = fmt(batteryKwh) + " <small>kWh</small>";
      result.inverter.innerHTML = fmt(inverterKw) + " <small>kW</small>";
      result.note.textContent = selected + " load categories selected. Battery estimate assumes the selected daily energy is spread evenly over 24 hours, an " + backupHours + "-hour backup window, 80% usable battery energy and a 20% planning allowance. It is not a component recommendation.";
      latestSummary = "KITEWIRE SAMPLE LOAD SNAPSHOT\nSelected categories: " + selected + "\nEstimated daily energy: " + fmt(energyKwh) + " kWh\nConnected load (all selected assumed simultaneous): " + fmt(connectedW / 1000) + " kW\nIllustrative battery planning figure: " + fmt(batteryKwh) + " kWh\nInverter conversation figure: " + fmt(inverterKw) + " kW\nBackup window: " + backupHours + " hours\nPlanning assumptions only — not an engineering design, quote or guarantee.";
    };

    estimator.addEventListener("submit", (event) => {
      event.preventDefault();
      calculate();
    });
    estimator.querySelectorAll("input").forEach((input) => {
      input.addEventListener("change", calculate);
    });
    const copyButton = document.querySelector("[data-copy-estimate]");
    if (copyButton) {
      copyButton.addEventListener("click", async () => {
        if (!latestSummary) calculate();
        const original = copyButton.textContent;
        try {
          await navigator.clipboard.writeText(latestSummary);
          copyButton.textContent = "Copied ✓";
        } catch (error) {
          const helper = document.createElement("textarea");
          helper.value = latestSummary;
          helper.setAttribute("readonly", "");
          helper.style.position = "absolute";
          helper.style.left = "-9999px";
          document.body.appendChild(helper);
          helper.select();
          const copied = document.execCommand("copy");
          helper.remove();
          copyButton.textContent = copied ? "Copied ✓" : "Copy unavailable";
        }
        window.setTimeout(() => { copyButton.textContent = original; }, 2200);
      });
    }
    calculate();
  }

  const quoteForm = document.querySelector("[data-quote-form]");
  if (quoteForm) {
    const feedback = quoteForm.querySelector("[data-form-feedback]");
    quoteForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!quoteForm.reportValidity()) return;
      const data = new FormData(quoteForm);
      const lines = [
        "KITEWIRE — FICTIONAL PROJECT BRIEF",
        "Name: " + (data.get("name") || ""),
        "Property area: " + (data.get("area") || ""),
        "Site type: " + (data.get("site") || ""),
        "Project goal: " + (data.get("goal") || ""),
        "Priority loads: " + (data.get("loads") || "Not specified"),
        "Additional notes: " + (data.get("notes") || "None"),
        "",
        "Prepared locally as a portfolio demonstration. Not sent to a real business."
      ];
      const summary = lines.join("\n");
      try {
        await navigator.clipboard.writeText(summary);
        feedback.textContent = "Your brief has been copied. This demo has not sent it anywhere.";
      } catch (error) {
        const helper = document.createElement("textarea");
        helper.value = summary;
        helper.setAttribute("readonly", "");
        helper.style.position = "absolute";
        helper.style.left = "-9999px";
        document.body.appendChild(helper);
        helper.select();
        const copied = document.execCommand("copy");
        helper.remove();
        feedback.textContent = copied ? "Your brief has been copied. This demo has not sent it anywhere." : "Copy is unavailable in this browser. Your answers remain in this form only.";
      }
    });
  }
})();