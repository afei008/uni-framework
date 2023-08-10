/** @format */

export function tree2listB(data, id, childs) {
    // 广度遍历，采用队列辅助
    const list = [];
    const queue = JSON.parse(JSON.stringify(data));
    while (queue.length) {
        const node = queue.shift();
        const children = node[childs];
        if (children) {
            children.forEach((item) => {
                item.pid = node[id];
            });
            queue.push(...children);
            node[childs] = null;
        }
        list.push(node);
    }
    return list;
}

export function tree2listD(data, id) {
    // 深度遍历，采用栈辅助
    const list = [];
    const stack = JSON.parse(JSON.stringify(data));
    while (stack.length) {
        const node = stack.pop();
        const { children } = node;
        if (children) {
            children.forEach((item) => {
                item.pid = node[id];
            });
            stack.push(...children);
        }
        list.push(node);
    }
    return list;
}

export function list2tree(list, id) {
    const [map, treeData] = [{}, []];

    for (let i = 0; i < list.length; i += 1) {
        map[list[i][id]] = i;
        list[i].children = [];
    }

    for (let i = 0; i < list.length; i += 1) {
        const node = list[i];
        if (node.pid && list[map[node.pid]]) {
            list[map[node.pid]].children.push(node);
        } else {
            treeData.push(node);
        }
    }
    return treeData;
}
