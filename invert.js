function toggleInvert() {
    if (document.documentElement.style.filter === "invert(0)") {
        document.documentElement.style.filter = "invert(1)";
    } else {
        document.documentElement.style.filter = "invert(0)";
    }
}

document.getElementById("invert").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: toggleInvert
    });
});

