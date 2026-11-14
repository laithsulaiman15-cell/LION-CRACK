
const activateBtn = document.getElementById("activateBtn");
const status = document.getElementById("status");

const deviceResult = document.getElementById("deviceResult");
const browserResult = document.getElementById("browserResult");
const systemResult = document.getElementById("systemResult");

const firmwareInput = document.getElementById("firmwareInput");
const checkBtn = document.getElementById("checkBtn");
const firmwareResult = document.getElementById("firmwareResult");

const userAgent = navigator.userAgent;

function detectConsole() {
    if (/PlayStation 5/i.test(userAgent)) {
        return "PS5";
    }

    if (/PlayStation 4/i.test(userAgent)) {
        return "PS4";
    }

    if (/PlayStation/i.test(userAgent)) {
        return "PLAYSTATION BROWSER - MODEL UNKNOWN";
    }

    return "GENERAL WEB BROWSER";
}

const detectedDevice = detectConsole();

deviceResult.textContent = "DEVICE: " + detectedDevice;
browserResult.textContent =
    "Browser identification: " + detectedDevice;

systemResult.textContent =
    "Device detected. Firmware verification required.";

activateBtn.addEventListener("click", () => {
    const version = firmwareInput.value.trim();

    if (!/^\d+\.\d{1,2}$/.test(version)) {
        firmwareResult.textContent = "INVALID SYSTEM VERSION";
        return;
    }

    if (detectedDevice !== "PS4" || version !== "14.02") {
        firmwareResult.textContent =
            "DEVICE OR VERSION NOT MATCHED - COMPATIBILITY NOT VERIFIED";
        return;
    }

    firmwareResult.textContent =
        "VERSION CHECK PASSED - RESEARCH FILE DOWNLOAD";

    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1MmE750py3kszHeqvpVFvaOYhPcvy-2-R";
    link.download = "kernel_1402.bin";
    link.click();
});
