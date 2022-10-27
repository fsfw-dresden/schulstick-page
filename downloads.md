---
layout: downloads
title: Downloads
permalink: /downloads/
---
# Download und Bespielen eines USB-Sticks
Wir sind gerade dabei, ein Debian-11-basiertes Release fertigzustellen.
Die letztjährige Version (1734v / 2021-04-24) basierend auf Debian-Linux 10 (stable, codename »buster«) lässt sich hier herunterladen:

> Image-Datei (7,5 GiB): [FSFW-Schulstick_1734v_Xfce_buster-amd64.img.gz](https://web.fsr.mw.tu-dresden.de/dateien/FSFW_Schulstick_2021/FSFW-Schulstick_1734v_Xfce_buster-amd64.img.gz)  
> dazugehörige SHA256-Prüfsumme: [FSFW-Schulstick_1734v_Xfce_buster-amd64.img.gz.sha256sum](https://web.fsr.mw.tu-dresden.de/dateien/FSFW_Schulstick_2021/FSFW-Schulstick_1734v_Xfce_buster-amd64.img.gz.sha256sum)
> Live-Demo ohne Download direkt im Webbrowser: https://distrotest.net/Schulstick%20Linux/2021.4

Für die Installation des FSFW-Schulsticks braucht es (mindestens) einen 16-Gigabyte-USB-Stick guter Qualität. Weiterhin braucht man ein spezielles Programm, um das Bespielen durchzuführen. Wir empfehlen dafür den [Etcher](https://www.balena.io/etcher/), den es dort für verschiedene Betriebssysteme zum Download gibt.

Damit einfach die komprimierte Image-Datei auswählen und auf den Stick "flashen". Das Programm verifiziert den erzeugten Stick auch, so dass bei erfolgreich vermeldetem Abschluss der Stick auch funktionieren sollte.
Das Image kann auch für USB-Sticks mit mehr als 16 Gigabyte verwendet werden, da sich die Persistenz-Partition beim ersten Start auf die verfügbare Größe anpasst.