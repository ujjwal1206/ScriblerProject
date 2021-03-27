function open1(writer, h, c) {
    const url = `../html/post.html?h=${encodeURIComponent(h.innerText)}&writer=${encodeURIComponent(writer.innerText)}&c=${encodeURIComponent(c.innerText)}`;
    window.location.href = url;

}