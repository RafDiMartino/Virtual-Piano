// code for the audio 

//Exception for the 'Tab' key.
document.onkeydown = function(t) {
    if (t.code === 'Tab' || t.code === 'F1' || t.code === 'F3') {
        return false;
    }
};


let keys = {
    'Tab': new Audio("white_keys/Piano.mf.C4.mp3"),
    'KeyQ': new Audio("white_keys/Piano.mf.D4.mp3"),
    'KeyW': new Audio("white_keys/Piano.mf.E4.mp3"),
    'KeyE': new Audio("white_keys/Piano.mf.F4.mp3"),
    'KeyR': new Audio("white_keys/Piano.mf.G4.mp3"),
    'KeyT': new Audio("white_keys/Piano.mf.A4.mp3"),
    'KeyY': new Audio("white_keys/Piano.mf.B4.mp3"),
    'KeyU': new Audio("white_keys/Piano.mf.C5.mp3"),
    'KeyI': new Audio("white_keys/Piano.mf.D5.mp3"),
    'KeyO': new Audio("white_keys/Piano.mf.E5.mp3"),
    'KeyP': new Audio("white_keys/Piano.mf.F5.mp3"),
    'BracketLeft': new Audio("white_keys/Piano.mf.G5.mp3"),
    'BracketRight': new Audio("white_keys/Piano.mf.A5.mp3"),
    'Enter': new Audio("white_keys/Piano.mf.B5.mp3"),
    'Backslash': new Audio("white_keys/Piano.mf.C6.mp3"),
    'Digit1': new Audio("black_keys/Piano.mf.Db4.mp3"),
    'Digit2': new Audio("black_keys/Piano.mf.Eb4.mp3"),
    'Digit4': new Audio("black_keys/Piano.mf.Gb4.mp3"),
    'Digit5': new Audio("black_keys/Piano.mf.Ab4.mp3"),
    'Digit6': new Audio("black_keys/Piano.mf.Bb4.mp3"),
    'Digit8': new Audio("black_keys/Piano.mf.Db5.mp3"),
    'Digit9': new Audio("black_keys/Piano.mf.Eb5.mp3"),
    'Minus': new Audio("black_keys/Piano.mf.Gb5.mp3"),
    'Equal': new Audio("black_keys/Piano.mf.Ab5.mp3"),
    'Backspace': new Audio("black_keys/Piano.mf.Bb5.mp3"),
}


document.addEventListener('keydown', function(e) {
    if (e.code in keys) {
        keys[e.code].currentTime = 0;
        keys[e.code].play();
    }
});


function stopEvent(e) {
    if (!e) e = window.event;
    if (e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.cancelBubble = true;
    }
}

function cancelEvent(e) {
    if (!e) e = window.event;
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}

/* code for keys animation..... 
I imagine there is probably a better way of doing this,
but at this specific point in time, is the only way I managed to make it work.... 
*/

document.addEventListener('keydown', function(e) {
    if (e.code === 'Tab') {
        document.getElementById("tab").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    document.getElementById("tab").classList.remove("active");
})

document.addEventListener('keydown', function(e) {
    if (e.code === 'KeyQ') {
        document.getElementById("q").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    document.getElementById("q").classList.remove("active");
})


document.addEventListener('keydown', function(e) {
    if (e.code === 'KeyW') {
        document.getElementById("w").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    document.getElementById("w").classList.remove("active");
})

document.addEventListener('keydown', function(e) {
    if (e.code === 'KeyE') {
        document.getElementById("e").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    document.getElementById("e").classList.remove("active");
})

document.addEventListener('keydown', function(e) {
    if (e.code === 'KeyR') {
        document.getElementById("r").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    document.getElementById("r").classList.remove("active");
})

document.addEventListener('keydown', function(e) {
    if (e.code === 'KeyT') {
        document.getElementById("t").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    document.getElementById("t").classList.remove("active");
})

document.addEventListener('keydown', function(e) {
    if (e.code === 'KeyY') {
        document.getElementById("y").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    document.getElementById("y").classList.remove("active");
})

document.addEventListener('keydown', function(e) {
    if (e.code === 'KeyU') {
        document.getElementById("u").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    document.getElementById("u").classList.remove("active");
})

document.addEventListener('keydown', function(e) {
    if (e.code === 'KeyI') {
        document.getElementById("i").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    document.getElementById("i").classList.remove("active");
})

document.addEventListener('keydown', function(e) {
    if (e.code === 'KeyO') {
        document.getElementById("o").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    document.getElementById("o").classList.remove("active");
})

document.addEventListener('keydown', function(e) {
    if (e.code === 'KeyP') {
        document.getElementById("p").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    document.getElementById("p").classList.remove("active");
})

document.addEventListener('keydown', function(e) {
    if (e.code === 'BracketLeft') {
        document.getElementById("[").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    document.getElementById("[").classList.remove("active");
})

document.addEventListener('keydown', function(e) {
    if (e.code === 'BracketRight') {
        document.getElementById("]").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    document.getElementById("]").classList.remove("active");
})

document.addEventListener('keydown', function(e) {
    if (e.code === 'Enter') {
        document.getElementById("enter").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    document.getElementById("enter").classList.remove("active");
})

document.addEventListener('keydown', function(e) {
    if (e.code === 'Backslash') {
        document.getElementById("#").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    document.getElementById("#").classList.remove("active");
})

document.addEventListener('keydown', function(e) {
    if (e.code === 'Digit1') {
        document.getElementById("one").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    document.getElementById("one").classList.remove("active");
})

document.addEventListener('keydown', function(e) {
    if (e.code === 'Digit2') {
        document.getElementById("two").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    document.getElementById("two").classList.remove("active");
})

document.addEventListener('keydown', function(e) {
    if (e.code === 'Digit4') {
        document.getElementById("four").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    document.getElementById("four").classList.remove("active");
})

document.addEventListener('keydown', function(e) {
    if (e.code === 'Digit5') {
        document.getElementById("five").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    document.getElementById("five").classList.remove("active");
})

document.addEventListener('keydown', function(e) {
    if (e.code === 'Digit6') {
        document.getElementById("six").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    document.getElementById("six").classList.remove("active");
})

document.addEventListener('keydown', function(e) {
    if (e.code === 'Digit8') {
        document.getElementById("eight").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    document.getElementById("eight").classList.remove("active");
})

document.addEventListener('keydown', function(e) {
    if (e.code === 'Digit9') {
        document.getElementById("nine").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    document.getElementById("nine").classList.remove("active");
})

document.addEventListener('keydown', function(e) {
    if (e.code === 'Minus') {
        document.getElementById("minus").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    document.getElementById("minus").classList.remove("active");
})

document.addEventListener('keydown', function(e) {
    if (e.code === 'Equal') {
        document.getElementById("equal").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    document.getElementById("equal").classList.remove("active");
})

document.addEventListener('keydown', function(e) {
    if (e.code === 'Backspace') {
        document.getElementById("backspace").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    document.getElementById("backspace").classList.remove("active");
})