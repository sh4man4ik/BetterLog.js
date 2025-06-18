let isMuted = false;

class BetterLog {
    //mute
    mute() {
        isMuted = true;
    }

    //unmute
    unmute() {
        isMuted = false;
    }

    //success
    success(message) {
        if (!isMuted) {
            console.log(`%c✅ ${message}`, 'color: #22bb33');
        }
    }

    //debug
    debug(message) {
        if (!isMuted) {
            console.log(`%c⚙️ ${message}`, 'color: #aaaaaa');
        }
    }

    //info
    info(message) {
        if (!isMuted) {
            console.log(`%cℹ️ ${message}`, 'color: #5bc0de');
        }
    }

    //test
    test(expected, actual) {
        if (!isMuted) {
            if (expected == actual) {
                console.log(`%c✅ TEST PASSED`, 'color: #22bb33');
            } else {
                console.log(`%c❌ TEST FAILED: expected value: ${expected}, actual value: ${actual}`, 'color: #bb2124');
            }
        }
    }

    //warn
    warn(message) {
        if (!isMuted) {
            console.log(`%c⚠️ ${message}`, 'color: #f0ad4e');
        }
    }

    //error
    error(message) {
        if (!isMuted) {
            console.log(`%c❌ ${message}`, 'color: #bb2124');
        }
    }

    //custom
    custom(message) {
        let styles = [];

        let options = {
            color(color) {
                styles.push(`color: ${color}`);
                return options;
            },
            background_color(backgroundColor) {
                styles.push(`background-color: ${backgroundColor}`);
                return options;
            },
            font_size(fontSize) {
                styles.push(`font-size: ${fontSize}`);
                return options;
            },
            text_decoration(textDecoration) {
                styles.push(`text-decoration: ${textDecoration}`);
                return options;
            },
            bold() {
                styles.push('font-weight: 900;');
                return options;
            },
            padding(topBottom, leftRight) {
                styles.push(`padding: ${topBottom} ${leftRight};`);
                return options;
            },
            log() {
                if (!isMuted) {
                    console.log(`%c${message}`, styles.join('; '));
                }
            },
        };

        return options;
    }
}

//for connection
window.BetterLog = BetterLog;