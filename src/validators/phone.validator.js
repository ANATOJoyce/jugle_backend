"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidPhone = IsValidPhone;
var class_validator_1 = require("class-validator");
var libphonenumber_js_1 = require("libphonenumber-js");
function IsValidPhone(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isValidPhone',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate: function (value) {
                    try {
                        var phoneNumber = (0, libphonenumber_js_1.parsePhoneNumber)(value);
                        return phoneNumber.isValid();
                    }
                    catch (e) {
                        return false;
                    }
                },
                defaultMessage: function () {
                    return 'Numéro de téléphone invalide';
                }
            }
        });
    };
}
