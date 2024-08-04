var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var formatPhoneNumber = function (phoneNumber) {
    // Menghilangkan semua spasi kosong
    phoneNumber = phoneNumber.replace(/\s+/g, '');
    // Jika nomor telepon diawali dengan +62
    if (phoneNumber.startsWith('+62')) {
        phoneNumber = '0' + phoneNumber.slice(3);
    }
    // Jika nomor telepon diawali dengan 62
    else if (phoneNumber.startsWith('62')) {
        phoneNumber = '0' + phoneNumber.slice(2);
    }
    // Pastikan nomor telepon tidak diawali dengan 08
    if (!phoneNumber.startsWith('08')) {
        throw new Error('Mohon masukan nomor telepon yang valid');
    }
    return phoneNumber;
};
var operators = {
    telkomsel: {
        name: 'Telkomsel',
        key: 'telkomsel',
        prefix: ['0811', '0812', '0813', '0821', '0822', '0823', '0852', '0853'],
        pattern: /^(0811|0812|0813|0821|0822|0823|0852|0853|0851)/,
        icon: 'https://maxsi.id/web/wp-content/uploads/2021/07/icon-telkomsel-terbaru.png'
    },
    indosat: {
        name: 'Indosat',
        key: 'indosat',
        prefix: ['0814', '0815', '0816', '0855', '0856', '0857', '0858'],
        pattern: /^(0814|0815|0816|0855|0856|0857|0858)/,
        icon: 'https://external-preview.redd.it/iYVvXr5Ef-DcLx4VoUk9a83qOncwfyhHdmiUHTONIek.jpg?auto=webp&s=5b46f6290e190537c65fd50f2dd8107d15a83d4e'
    },
    xl: {
        name: 'XL',
        key: 'xl',
        prefix: ['0817', '0818', '0819', '0859', '0877', '0878'],
        pattern: /^(0817|0818|0819|0859|0877|0878)/,
        icon: 'https://1.bp.blogspot.com/-kY3jG5ylKyQ/YIKwTgYwehI/AAAAAAAAClg/GtJMbz2fhYQZFJftXFGMMB1F-dWKHMipwCNcBGAsYHQ/s2048/XL.png'
    },
    three: {
        name: 'Three',
        key: 'three',
        prefix: ['0895', '0896', '0897', '0898', '0899'],
        pattern: /^(0895|0896|0897|0898|0899)/,
        icon: 'https://1.bp.blogspot.com/-uV9BebztHtM/VTR3mBLK53I/AAAAAAAAAHM/PcFOAPYcGao/s1600/kartu%2BGSM%2Bthree.png'
    },
    smartfren: {
        name: 'Smartfren',
        key: 'smartfren',
        prefix: ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889'],
        pattern: /^(0881|0882|0883|0884|0885|0886|0887|0888|0889)/,
        icon: 'https://seeklogo.com/images/S/smartfren-logo-A978AD9193-seeklogo.com.png'
    },
    axis: {
        name: 'Axis',
        key: 'axis',
        prefix: ['0831', '0832', '0833', '0838'],
        pattern: /^(0831|0832|0833|0838)/,
        icon: 'https://cdn.dividendmax.com/companies/axis.png'
    },
    byu: {
        name: 'by.U',
        key: 'byu',
        prefix: ['0851'],
        pattern: /^(0851)/,
        icon: 'https://cdn4.iconfinder.com/data/icons/sim-card-indonesia-1/256/card_sim_mobile_indonesia-10-512.png'
    }
};
var phonNumberFinder = function (phone) {
    var phoneNumber = formatPhoneNumber(phone);
    var operatorsList = Object.values(operators);
    var result = operatorsList.find(function (operator) { var _a; return (_a = operator.prefix) === null || _a === void 0 ? void 0 : _a.some(function (prefix) { return phoneNumber.startsWith(prefix); }); });
    if (!result)
        throw new Error('Nomor Telepon Tidak Valid');
    result.number = phoneNumber;
    return result;
};
var state = {
    operator: null
};
var OperatorParser = /** @class */ (function () {
    /**
     * dapat mengirimkan beberapa data @param operatorList yang perlu di
     * inisialisasi ulang dengan data yang baru
     */
    function OperatorParser(operatorList) {
        this.list = operators;
        this.find = phonNumberFinder;
        this.format = formatPhoneNumber;
        this.inputFormat = false;
        this.keyboardEvent = {
            keyup: false,
            input: false,
            keydown: false,
            paste: false,
            change: false,
        };
        this.list = __assign({}, operators); // Mulai dengan salinan dari default operators
        if (operatorList) {
            for (var key in operatorList) {
                if (operatorList.hasOwnProperty(key) && operators.hasOwnProperty(key)) {
                    // Gabungkan data yang diberikan dengan data default
                    this.list[key] = __assign(__assign({}, operators[key]), operatorList[key]);
                }
            }
        }
    }
    Object.defineProperty(OperatorParser.prototype, "formatInput", {
        /**
         * Untuk memformat sebuah inputan agar setelah measukan nomor akan di format ulang secara otomatis
         */
        get: function () {
            this.inputFormat = true;
            return this;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OperatorParser.prototype, "keyup", {
        /**
         * Ini merupakan Input event method keyup
         */
        get: function () {
            this.keyboardEvent.keyup = true;
            return this;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OperatorParser.prototype, "keydown", {
        /**
         * Ini merupakan Input event method keydown
         */
        get: function () {
            this.keyboardEvent.keydown = true;
            return this;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OperatorParser.prototype, "input", {
        /**
         * Ini merupakan Input event method input
         */
        get: function () {
            this.keyboardEvent.input = true;
            return this;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OperatorParser.prototype, "paste", {
        /**
         * Ini merupakan Input event method paste
         */
        get: function () {
            this.keyboardEvent.paste = true;
            return this;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OperatorParser.prototype, "change", {
        /**
         * Ini merupakan Input event method change
         */
        get: function () {
            this.keyboardEvent.change = true;
            return this;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Untuk mendeteksi operator itu valid atau tidak
     * Terdapat bebera 2 parameter yaitu `@param selector` dan `@param listener`
     */
    OperatorParser.prototype.listen = function (selector = 'o', listener) {
        var _this = this;
        if (!selector) return
        var input = document.querySelector(selector);
        var validation = function (e) {
            var _a;
            var phone = (_a = e.target) === null || _a === void 0 ? void 0 : _a.value;
            try {
                var operator = _this.find(phone);
                // Jika format input dipakai, maka update input value
                if (_this.inputFormat)
                    input.value = operator.number;
                // Jika operator berubah, maka panggil listener jika tidak maka biarkan saja
                if (state.operator === operator.key)
                    return;
                listener(operator);
                // Update state operator
                state.operator = operator.key;
            }
            catch (error) {
                // berikan response error
                listener(null, error);
                // Update state operator menjadi null
                state.operator = null;
            }
        };
        for (var key in this.keyboardEvent) {
            var events = this.keyboardEvent;
            if (events[key]) {
                input.addEventListener(key, function (e) { return setTimeout(function () {
                    validation(e);
                }, 0); });
            }
        }
        return this;
    };
    return OperatorParser;
}());
if (typeof module !== 'undefined' && module.exports) {
    module.exports = OperatorParser;
}
window.OperatorParser = OperatorParser;
// Contoh penggunaan 
// const parser = new OperatorParser({
//     telkomsel: {
//         icon: 'https://www.icon.com/icontelkomsel-terbaru.png',
//     },
//     //...operator lainnya yang ingin di config ulang
// })
// parser.change.keyup.input.paste.listen('', (value) => {
//     if (value) {
//         console.log('Nomor Telpon:', value.number)
//         console.log('Operator:', value.name)
//         console.log('Icon:', value.icon)
//     } else {
//         console.log('Nomor Telepon Tidak Valid')
//     }
// })
