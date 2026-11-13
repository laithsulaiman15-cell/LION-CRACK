
const activateBtn = document.getElementById("activateBtn");
const status = document.getElementById("status");

const firmwareInput = document.getElementById("firmwareInput");
const checkBtn = document.getElementById("checkBtn");
const firmwareResult = document.getElementById("firmwareResult");

activateBtn.addEventListener("click", () => {
    status.textContent = "LION CRACK INTERFACE READY";
});

checkBtn.addEventListener("click", () => {
    const version = firmwareInput.value.trim();

    if (!/^\d+\.\d{2}$/.test(version)) {
        firmwareResult.textContent = "INVALID VERSION FORMAT";
        return;
    }

    if (version === "14.02") {
        firmwareResult.textContent =
            "DETECTED: PS4 FIRMWARE 14.02 | RESEARCH ONLY";
    } else {
        firmwareResult.textContent =
            "DETECTED: PS4 FIRMWARE " + version +
            " | COMPATIBILITY NOT VERIFIED";
    }
});
