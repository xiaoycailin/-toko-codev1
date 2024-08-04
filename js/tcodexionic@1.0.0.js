var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
fetch('https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css').then(function (response) { return __awaiter(_this, void 0, void 0, function () {
    var styles, sty;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, response.text()];
            case 1:
                styles = _a.sent();
                sty = document.createElement('style');
                sty.innerHTML = styles;
                document.head.appendChild(sty);
                return [2 /*return*/];
        }
    });
}); });
var sc = document.createElement('script');
sc.src = 'https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js';
sc.type = 'module';
document.head.appendChild(sc);
var Sheet = /** @class */ (function () {
    function Sheet(props) {
        this._sheetName = 'default';
        this._breakpoints = [0, 0.75];
        this._initialBreakpoint = 0.75;
        this._backdropDismiss = false;
        this._isOpen = false;
        this._borderRadius = {
            topLeft: '10px',
            topRight: '10px',
        };
        this._followNavigation = false;
        this._sheetName = "ax-sheet_".concat((props === null || props === void 0 ? void 0 : props.name) ? props.name : 'default');
        this._breakpoints = (props === null || props === void 0 ? void 0 : props.breakpoints) ? props.breakpoints : [0, 0.75];
        this._initialBreakpoint = (props === null || props === void 0 ? void 0 : props.initialBreakpoint) ? props.initialBreakpoint : 0.75;
        this._ionContent = document.createElement('div');
        this._backdropDismiss = (props === null || props === void 0 ? void 0 : props.backdropDismiss) ? props.backdropDismiss : false;
        this._isOpen = (props === null || props === void 0 ? void 0 : props.isOpen) ? props.isOpen : false;
        this._borderRadius = (props === null || props === void 0 ? void 0 : props.borderRadius) || { topLeft: '10px', topRight: '10px' };
        this._styleContent = (props === null || props === void 0 ? void 0 : props.styleContent) || { padding: '10px', marginTop: '20px' };
        this._followNavigation = (props === null || props === void 0 ? void 0 : props.followNavigation) || false;
    }
    Sheet.prototype.create = function (content) {
        this._ionContent.innerHTML = "\n            <open-modal id=\"".concat(this._sheetName, "\" hidden></open-modal>\n            <ion-modal is-open=\"").concat(this._isOpen, "\" backdrop-dismiss=\"").concat(this._backdropDismiss, "\" trigger=\"").concat(this._sheetName, "\" initial-breakpoint=\"").concat(this._initialBreakpoint, "\">\n                <div x-child>\n                ").concat(content, "\n                </div>\n            </ion-modal>\n            ");
        document.body.appendChild(this._ionContent);
        var modal = document.querySelector('ion-modal');
        modal.breakpoints = this._breakpoints;
        var cc = modal.querySelector('[x-child]');
        for (var key in this._styleContent) {
            cc.style[key] = this._styleContent[key];
        }
        return this;
    };
    Sheet.prototype.open = function () {
        var _this = this;
        setTimeout(function () {
            var _a, _b, _c;
            var modal = document.querySelector('open-modal');
            modal.click();
            var shadowRoot = (_a = document.querySelector("ion-modal[trigger=\"".concat(_this._sheetName, "\"]"))) === null || _a === void 0 ? void 0 : _a.shadowRoot;
            var rootModalWrapper = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector('.modal-wrapper');
            rootModalWrapper.style.borderTopLeftRadius = (_b = _this._borderRadius.topLeft) === null || _b === void 0 ? void 0 : _b.toString();
            rootModalWrapper.style.borderTopRightRadius = (_c = _this._borderRadius.topRight) === null || _c === void 0 ? void 0 : _c.toString();
            if (_this._followNavigation && !Sheet.stateNavigation) {
                Sheet.stateNavigation = true;
                history.pushState(Sheet.stateNavigation, 'open', location.href);
            }
        }, 100);
        return this;
    };
    Sheet.prototype.close = function () {
        var _this = this;
        var modal = document.querySelector("ion-modal[trigger=\"".concat(this._sheetName, "\"]"));
        if (this._followNavigation) {
            history.back();
        }
        else {
            modal.dismiss();
        }
        modal === null || modal === void 0 ? void 0 : modal.onWillDismiss(function () {
            // console.log(this._followNavigation, 'kuykuty')
            _this._followNavigation && history.back();
        });
        return this;
    };
    Sheet.prototype.removeAfterClose = function () {
        var _this = this;
        var modal = document.querySelector("ion-modal[trigger=\"".concat(this._sheetName, "\"]"));
        modal === null || modal === void 0 ? void 0 : modal.addEventListener('willDismiss', function () {
            _this._ionContent.remove();
        });
        return this;
    };
    Sheet.stateNavigation = false;
    return Sheet;
}());
var ionButton = function (_a) {
    var text = _a.text, fill = _a.fill, onClick = _a.onClick, size = _a.size;
    var btn = document.createElement('ion-button');
    if (fill)
        btn.setAttribute('fill', fill);
    if (size)
        btn.setAttribute('size', size);
    btn.textContent = text;
    if (onClick)
        btn.onclick = onClick;
    return btn;
};
var Modal = /** @class */ (function () {
    function Modal(_modalName) {
        this._modalName = _modalName;
        this._removeAfterClose = false;
        this._removeAfterClose = false;
        this._modalName = "".concat(this._modalName);
        var cssModalCustomDialog = "ion-modal#ax-modal_".concat(this._modalName, " {\n            --width: fit-content;\n            --min-width: 250px;\n            --height: fit-content;\n            --border-radius: 6px;\n            --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);\n        }\n\n        ion-modal#").concat(_modalName, " h1 {\n            margin: 20px 20px 10px 20px;\n        }\n\n        ion-modal#").concat(_modalName, " ion-icon {\n            margin-right: 6px;\n\n            width: 48px;\n            height: 48px;\n\n            padding: 4px 0;\n\n            color: #aaaaaa;\n        }\n\n        ion-modal#example-modal .wrapper {\n            margin-bottom: 10px;\n        }");
        var styleElement = document.createElement('style');
        styleElement.innerHTML = cssModalCustomDialog;
        styleElement.dataset.name = this._modalName;
        document.head.appendChild(styleElement);
        this._modalButton = document.createElement('button');
        this._modalButton.hidden = true;
        this._modalButton.id = this._modalName;
        this._ionModal = document.createElement('ion-modal');
        document.body.appendChild(this._modalButton);
    }
    Modal.prototype.create = function (content) {
        this._ionModal.id = "ax-modal_".concat(this._modalName);
        this._ionModal.setAttribute('trigger', this._modalName);
        this._ionModal.innerHTML = content;
        document.body.appendChild(this._ionModal);
        this.open().removeAfterClose();
        return this;
    };
    Modal.prototype.listen = function (listener) {
        this._ionModal.addEventListener('didDismiss', function (e) { return listener({ name: 'dismiss', detail: e.detail }); });
        this._ionModal.addEventListener('willPresent', function (e) { return listener({ name: 'present', detail: e.detail }); });
        return this;
    };
    Modal.prototype.backdropDismis = function (value) {
        if (value === void 0) { value = false; }
        this._ionModal.setAttribute('backdrop-dismiss', value);
        return this;
    };
    Modal.prototype.confirm = function (title, text, actions) {
        var _this = this;
        var cfId = Math.random();
        this._ionModal.id = "ax-modal_".concat(this._modalName);
        this._ionModal.setAttribute('trigger', this._modalName);
        this._ionModal.innerHTML = "\n            <div style=\"max-width:300px; padding-right: 15px; padding-left:15px;\">\n                <h5>".concat(title, "</h5>\n                ").concat(text ? "<p style=\"font-size: 13px; opacity: 0.7\">".concat(text, "</p>") : '', "\n                <div style=\"display:flex; justify-content:end; padding-bottom: 10px;\" class\"ion-padding\" id=\"mdl").concat(cfId, "\"></div>\n            </div>\n        ");
        document.body.appendChild(this._ionModal);
        this.open().backdropDismis(true).removeAfterClose();
        var ionButton = function (_a) {
            var text = _a.text, fill = _a.fill, onClick = _a.onClick;
            var btn = document.createElement('ion-button');
            if (fill)
                btn.setAttribute('fill', fill);
            btn.setAttribute('size', 'small');
            btn.textContent = text;
            if (onClick)
                btn.onclick = onClick;
            return btn;
        };
        var action = document.getElementById("mdl".concat(cfId));
        if (actions) {
            actions.map(function (_) { return action === null || action === void 0 ? void 0 : action.appendChild(_); });
        }
        else {
            if (action)
                action.append(ionButton({ text: 'Tidak', fill: 'clear', onClick: function () { return _this.close(false, 'dialogConfirm'); } }), ionButton({ text: 'Ya', onClick: function () { return _this.close(true, 'dialogConfirm'); } }));
        }
        return this;
    };
    Modal.prototype.iosMode = function (v) {
        this._ionModal.setAttribute('mode', v ? 'ios' : 'md');
        return this;
    };
    Modal.prototype.alert = function (message, title) {
        var _this = this;
        this.confirm(title ? title : 'Peringatan', message, [
            ionButton({
                text: 'OK', fill: 'clear', onClick: function () {
                    _this.close(null, 'alertDialog');
                }
            })
        ])
        return this;
    };
    Modal.prototype.open = function () {
        this._modalButton.click();
        return this;
    };
    Modal.prototype.close = function (meta, role) {
        var _this = this;
        this._ionModal.dismiss(meta, role).then(function () {
            if (_this._removeAfterClose) {
                _this._ionModal.remove();
            }
        });
        return this;
    };
    Modal.prototype.removeAfterClose = function () {
        var _this = this;
        this._removeAfterClose = true;
        this.listen(function (e) {
            var _a;
            if (e.name == 'dismiss' && ((_a = e.detail) === null || _a === void 0 ? void 0 : _a.role) == 'backdrop') {
                setTimeout(function () {
                    _this._ionModal.remove();
                }, 500);
            }
        });
        return this;
    };
    return Modal;
}());
var Toast = /** @class */ (function () {
    function Toast() {
    }
    Toast.create = function (props) {
        var _this = this;
        if (typeof props === 'string') {
            this._toastElement.message = props;
        }
        else {
            for (var key in props) {
                this._toastElement[key] = props[key];
            }
        }
        this._toastElement.duration = 2000;
        this._toastElement.isOpen = true;
        this._toastElement.swipeGesture = 'vertical';
        document.body.appendChild(this._toastElement);
        this._toastElement.addEventListener('didDismiss', function () {
            _this._toastElement.isOpen = false;
            setTimeout(function () {
                _this._toastElement.remove();
            }, 500);
        });
        return this;
    };
    Toast.position = function (position) {
        this._toastElement.position = position;
        return this;
    };
    Toast.color = function (color) {
        this._toastElement.color = color;
        return this;
    };
    Toast.duration = function (duration) {
        this._toastElement.duration = duration;
        return this;
    };
    Toast.icon = function (icon) {
        this._toastElement.icon = icon;
        return this;
    };
    Toast.buttons = function (buttons) {
        this._toastElement.buttons = buttons;
    };
    Toast.listen = function (listener) {
        var _this = this;
        this._toastElement.addEventListener('didDismiss', function (e) {
            setTimeout(function () {
                _this._toastElement.remove();
            }, 500);
            listener(e);
        });
        this._toastElement.addEventListener('didPresent', function (e) { return listener(e); });
        this._toastElement.addEventListener('willDismiss', function (e) { return listener(e); });
        this._toastElement.addEventListener('willPresent', function (e) { return listener(e); });
        return this;
    };
    Toast._toastElement = document.createElement('ion-toast');
    return Toast;
}());
window.SwipeSheet = Sheet;
window.Modal = Modal;
window.ionButton = ionButton;
window.Toast = Toast;
window.addEventListener('popstate', function () {
    if (Sheet.stateNavigation) {
        var modal = document.querySelector('ion-modal');
        Sheet.stateNavigation = false;
        modal.dismiss();
    }
});
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Sheet;
}