contents.onclick = function(e) {

  function handleLink(href) {
    let isLeaving = confirm(`Leave for ${href}?`);
    if (!isLeaving) return false;
  }

  let target = e.target.closest('a');

  if (target && contents.contains(target)) {
    return handleLink(target.getAttribute('href'));
  }
};