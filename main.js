// @ts-check

console.info("v1.0.4");

window.onload = () => {
    const rollsCount = /** @type {HTMLInputElement} */
        (requireNonNull(document.getElementById("rollsCount")));
    const rollGacha = requireNonNull(document.getElementById("rollGacha"));
    const result = requireNonNull(document.getElementById("result"));

    rollGacha.addEventListener("click", function () {
        result.innerHTML = "";
        const rollsCountValue = fixValue(Number(rollsCount.value), 1, 100);
        const rollsCountValueFloored = Math.floor(rollsCountValue);

        new Array(rollsCountValueFloored).fill(undefined)
            .forEach(empty => {
                result.innerHTML += `
                <div class="card m-2">
                    <div class="card-body p-2">
                        <p class="card-text">${getRandomElement(titles.flat())}</p>
                    </div>
                </div>
                `;
            });
    });
}

/**
 * min以上max未満のランダムな整数を得る
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    const randomInt = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    return randomInt;
}

/**
 * 配列内のランダムな要素を抽出して返す
 * @template T
 * @param {Array<T>} array
 * @returns {T}
 */
function getRandomElement(array) {
    const rand = getRandomInt(0, array.length);
    const randomElement = array[rand];
    return randomElement;
}

/**
 * 異常な数値をmin以上max以下の値に収まるように補正する
 * @param {number} value
 * @param {number} min
 * @param {number} max
 */
function fixValue(value, min, max) {
    const valueFixed = Math.min(Math.max(value, min), max);
    return valueFixed;
}

/**
 * objがnullかどうか判定し、nullの場合はエラーを発生させる
 * @template T
 * @param {T | null} obj
 * @returns {T}
 */
function requireNonNull(obj) {
    if (obj === null)
        throw new Error("値がnullです。");
    return obj;
}