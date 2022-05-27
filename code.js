const search = info => {
    chrome.tabs.create({ url: 'http://yandex.ru/yandsearch?text=' + info.selectionText });
};

const idy = '8b1271b9-2fea-494a-9803-bbda32f9eb61';

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({ title: 'Искать в Яндексе', id: idy, contexts: ['selection'] });
});

chrome.contextMenus.onClicked.addListener(info => {
    if (info.menuItemId === idy) {
        search(info);
    }
});
