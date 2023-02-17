{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.77;
        const rateUSD = 4.45;
        const rateJPY = 29.87;
        const rateCAD = 0.30;
        const rateCHF = 0.21;
        const rateCNH = 1.53;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;
            case "USD":
                return amount / rateUSD;
            case "JPY":
                return amount * rateJPY;
            case "CAD":
                return amount * rateCAD;
            case "CHF":
                return amount * rateCHF;
            case "CNH":
                return amount * rateCNH;
        };
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-input");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);
        updateResultText(amount, result, currency);

    };

    {
        const init = () => {
            const formElement = document.querySelector(".js-form");

            formElement.addEventListener("submit", onFormSubmit);

        };
        init();
    }
}