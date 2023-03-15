let anchors = document.getElementsByTagName('a');
for(let anchor of anchors){
  let href = anchor.getAttribute("href");
  if(href && href.includes('://') && !href.includes("http://internal.com")) { // или startsWith
    anchor.style.color = "orange";
  }
}