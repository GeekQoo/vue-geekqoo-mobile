(function (doc: Document, win: Window) {
    const docEl: HTMLElement = doc.documentElement;
    const resizeEvt: string = "orientationchange" in win ? "orientationchange" : "resize";
    const reCalc = () => {
        const clientWidth: number = docEl.clientWidth;
        if (!clientWidth) return;
        const fontSize: string = `${100 * (clientWidth / 375)}px`;
        if (docEl.style.fontSize !== fontSize) docEl.style.fontSize = fontSize;
    };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, reCalc, false);
    doc.addEventListener("DOMContentLoaded", reCalc, false);
})(document, window);
