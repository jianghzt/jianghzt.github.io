(function () {
  var lists = document.querySelectorAll('.js-toc');
  if (!lists.length) {
    return;
  }

  var headings = document.querySelectorAll('.post-content h2, .post-content h3');
  if (!headings.length) {
    lists.forEach(function (list) {
      var container = list.closest('details, nav');
      if (container) {
        container.hidden = true;
      }
    });
    return;
  }

  headings.forEach(function (heading, index) {
    if (!heading.id) {
      var base = (heading.textContent || '')
        .replace(/\s+/g, '-')
        .replace(/[^A-Za-z0-9\u4e00-\u9fa5_-]/g, '')
        .toLowerCase();
      heading.id = 'toc-' + (base || 'heading') + '-' + index;
    }

    lists.forEach(function (list) {
      var item = document.createElement('li');
      if (heading.tagName === 'H3') {
        item.className = 'toc-sub';
      }
      var link = document.createElement('a');
      link.href = '#' + heading.id;
      link.textContent = heading.textContent;
      item.appendChild(link);
      list.appendChild(item);
    });
  });
})();
