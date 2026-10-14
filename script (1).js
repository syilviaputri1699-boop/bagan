function masukKeluarga() {
            document.getElementById("halamanAwal").style.display = "none";
            document.getElementById("isiKeluarga").style.display = "block";
            window.scrollTo(0, 0);
        }

        function kembaliAwal() {
            document.getElementById("isiKeluarga").style.display = "none";
            document.getElementById("halamanAwal").style.display = "flex";
            window.scrollTo(0, 0);
        }
