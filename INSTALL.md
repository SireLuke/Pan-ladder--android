# PAN View Ladder - installable Android app (PWA) v0.3.1

Synthetic data only. No network calls, no tracking, no accounts. Works offline after the first load.

## Install on Android (Chrome)
1. Put this folder on any static HTTPS host (GitHub Pages, Netlify, your own server), open `index.html` on the phone in Chrome.
2. Chrome menu -> "Install app" (or "Add to Home screen"). It then opens full-screen and works in airplane mode.

## Fully offline, no host (Termux)
1. Install Termux (F-Droid build), copy this folder to the phone.
2. `cd <folder> && python -m http.server 8080`
3. Open `http://localhost:8080/index.html` in Chrome -> Install app. (localhost counts as a secure context.)

## Controls on a phone
One finger drag = rotate (yaw/pitch). Two-finger pinch = zoom along the ladder L0-L5. Sliders: yaw/pitch/roll, time, 5-D plane and angle.

## What this is not
It is an app, not a bootable operating system. Booting a phone into PANoRAMic.os means a custom Android build (AOSP/LineageOS) for one specific device with an unlocked bootloader, which is a separate project.
Opening `index.html` directly from storage (file://) still runs the page but cannot install or cache itself.

## Tested (Chromium, Pixel 7 profile)
Service worker active; offline reload works; manifest and three icons load; one-finger rotate; two-finger pinch zoom; no horizontal overflow; canonical-digest check reports UNCHANGED; no console errors.
Not tested: a physical Android device, Safari/iOS, Play Store packaging.
