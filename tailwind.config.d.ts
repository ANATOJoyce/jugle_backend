export let content: string[];
export namespace theme {
    let screens: {};
    namespace extend {
        export namespace transitionProperty {
            let width: string;
            let height: string;
            let bg: string;
            let display: string;
            let visibility: string;
            let padding: string;
        }
        export namespace colors {
            let grey: {
                0: string;
                5: string;
                10: string;
                20: string;
                30: string;
                40: string;
                50: string;
                60: string;
                70: string;
                80: string;
                90: string;
            };
            let violet: {
                5: string;
                10: string;
                20: string;
                30: string;
                40: string;
                50: string;
                60: string;
                70: string;
                80: string;
                90: string;
            };
            let pink: {
                5: string;
                10: string;
                20: string;
                30: string;
                40: string;
                50: string;
                60: string;
                70: string;
                80: string;
                90: string;
            };
            let orange: {
                5: string;
                10: string;
                20: string;
                30: string;
                40: string;
                50: string;
                60: string;
                70: string;
                80: string;
                90: string;
            };
            let teal: {
                5: string;
                10: string;
                20: string;
                30: string;
                40: string;
                50: string;
                60: string;
                70: string;
                80: string;
                90: string;
            };
            let cyan: {
                5: string;
                10: string;
                20: string;
                30: string;
                40: string;
                50: string;
                60: string;
                70: string;
                80: string;
                90: string;
            };
            let indigo: {
                5: string;
                10: string;
                20: string;
                30: string;
                40: string;
                50: string;
                60: string;
                70: string;
                80: string;
                90: string;
            };
            let fuschia: {
                5: string;
                10: string;
                20: string;
                30: string;
                40: string;
                50: string;
                60: string;
                70: string;
                80: string;
                90: string;
            };
            let rose: {
                5: string;
                10: string;
                20: string;
                30: string;
                40: string;
                50: string;
                60: string;
                70: string;
                80: string;
                90: string;
            };
            let yellow: {
                5: string;
                10: string;
                20: string;
                30: string;
                40: string;
                50: string;
                60: string;
                70: string;
                80: string;
                90: string;
            };
            let emerald: {
                5: string;
                10: string;
                20: string;
                30: string;
                40: string;
                50: string;
                60: string;
                70: string;
                80: string;
                90: string;
            };
            let blue: {
                5: string;
                10: string;
                20: string;
                30: string;
                40: string;
                50: string;
                60: string;
                70: string;
                80: string;
                90: string;
            };
            namespace vice {
                let start: string;
                let stop: string;
            }
        }
        export let heigth: {
            "18": string;
        };
        export namespace borderRadius {
            let none: string;
            let soft: string;
            let base: string;
            let rounded: string;
            let circle: string;
        }
        export let spacing: {
            "2xsmall": string;
            xsmall: string;
            small: string;
            base: string;
            large: string;
            xlarge: string;
            "2xlarge": string;
            "3xlarge": string;
            "4xlarge": string;
            "5xlarge": string;
            "6xlarge": string;
        };
        let width_1: {
            largeModal: string;
            "18": string;
            "29": string;
            inherit: string;
            eventButton: string;
        };
        export { width_1 as width };
        export namespace minWidth {
            let modal: string;
            let sidebar: string;
        }
        export namespace maxWidth {
            let sidebar_1: string;
            export { sidebar_1 as sidebar };
        }
        export let minHeight: {
            topbar: string;
            content: string;
            "radix-accodion": string;
        };
        export namespace maxHeight {
            let topbar: string;
        }
        export let lineHeight: {
            xsmall: string;
            small: string;
            base: string;
            large: string;
            xlarge: string;
            "2xlarge": string;
            "3xlarge": string;
            "4xlarge": string;
        };
        export let fontSize: {
            xsmall: string;
            small: string;
            base: string;
            large: string;
            xlarge: string;
            "2xlarge": string;
            "3xlarge": string;
            "4xlarge": string;
            "5xlarge": string;
        };
        export namespace fontFamily {
            let sans: string[];
            let mono: string[];
        }
        export namespace screens_1 {
            let xsmall: string;
            let small: string;
            let medium: string;
            let large: string;
        }
        export { screens_1 as screens };
        export namespace boxShadow {
            let cta: string;
            let dropdown: string;
            let input: string;
            let searchModal: string;
            let toaster: string;
        }
        export let keyframes: {
            ring: {
                "0%": {
                    transform: string;
                };
                "100%": {
                    transform: string;
                };
            };
            "fade-in-right": {
                "0%": {
                    opacity: string;
                    transform: string;
                };
                "100%": {
                    opacity: string;
                    transform: string;
                };
            };
            "fade-in-top": {
                "0%": {
                    opacity: string;
                    transform: string;
                };
                "100%": {
                    opacity: string;
                    transform: string;
                };
            };
            "fade-out-top": {
                "0%": {
                    height: string;
                };
                "99%": {
                    height: string;
                };
                "100%": {
                    visibility: string;
                };
            };
            "accordion-slide-up": {
                "0%": {
                    height: string;
                    opacity: string;
                };
                "100%": {
                    height: string;
                    opacity: string;
                };
            };
            "accordion-slide-down": {
                "0%": {
                    "min-height": string;
                    "max-height": string;
                    opacity: string;
                };
                "100%": {
                    "min-height": string;
                    "max-height": string;
                    opacity: string;
                };
            };
            enter: {
                "0%": {
                    transform: string;
                    opacity: number;
                };
                "100%": {
                    transform: string;
                    opacity: number;
                };
            };
            leave: {
                "0%": {
                    transform: string;
                    opacity: number;
                };
                "100%": {
                    transform: string;
                    opacity: number;
                };
            };
            "slide-in": {
                "0%": {
                    transform: string;
                };
                "100%": {
                    transform: string;
                };
            };
        };
        export let animation: {
            ring: string;
            "fade-in-right": string;
            "fade-in-top": string;
            "fade-out-top": string;
            "accordion-open": string;
            "accordion-close": string;
            enter: string;
            "slide-in": string;
            leave: string;
        };
        export let lineClamp: {
            "[var(--lines)]": string;
        };
    }
}
export let plugins: any[];
