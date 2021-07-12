const greatestValueInBST = (bst) => {
    let greatestValue = bst.root;

    while (greatestValue.rightChild) {
        biggestNumber = greatestValue.rightChild;
    }
    return greatestValue.value;
};

const greatestValueInBST = (bst) => {
    const findGreatest = (node) => {
        if (!node.rightChild) return node;

        return findGreatest(node.rightChild);
    };

    if (bst.root.rightChild) {
        return findGreatest(bst.root).value;
    } else {
        return bst.root.value;
    }
};
