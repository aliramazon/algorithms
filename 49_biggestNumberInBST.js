const biggestNumberInBST = (bst) => {
    let biggestNumber = bst.root;

    while (biggestNumber.rightChild) {
        biggestNumber = biggestNumber.rightChild;
    }
    return biggestNumber.value;
};

const biggestNumberInBST1 = (bst) => {
    const findBiggest = (node) => {
        if (!node.rightChild) return node;

        return findBiggest(node.rightChild);
    };

    if (bst.root.rightChild) {
        return biggestNumberInBST1(bst.root).value;
    } else {
        return bst.root.value;
    }
};
