function Range(start, end) {
    const range = [];
    for(let i = start + 1; i < end; i++) {
      range.push(i);
    }
    return range;
}

export default Range;