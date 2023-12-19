function adjustLights(lights) {
    let init = lights[0];
    let changes = 0;
    for (let i = 0; i < lights.length; i++) {
        if (i % 2 === 1 && lights[i] === init) changes++;
        else if (i % 2 === 0 && lights[i] !== init) changes++;
    }

    const reversed = [...lights].reverse();
    let changes_reverse = 0;
    for (let i = 0; i < reversed.length; i++) {
        if (i % 2 === 0 && lights[i] === init)
            changes_reverse++;
        else if (i % 2 === 1 && lights[i] !== init)
            changes_reverse++;
    }

    return Math.min(changes, changes_reverse);
}