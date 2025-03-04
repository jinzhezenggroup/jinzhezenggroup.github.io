const People = function ([image = '/images/avatar.gif', delimiter = '|', comment = '%'], content) {
    const links = content.split('\n').filter(line => line.trim() !== '').map(line => {
        const item = line.split(delimiter).map(arg => arg.trim());
        if (item[0][0] === comment) return '';
        const imageSource = item[2] || image;
        const hasExtension = /\.[^/]+$/.test(imageSource);
        return `<div class="people-container">
  <object class="people-image" ${hasExtension ? '' : 'type="image/jpeg" '}data="${imageSource}"></object>
  <p>${item[0] || ''}</p><p>${item[1] || ''}</p>
  <a href="${item[3] || '#'}"></a>
  </div>`;
    });
    return `<div class="people">${links.join('')}</div>`;
};
hexo.extend.tag.register('people', People, true);
