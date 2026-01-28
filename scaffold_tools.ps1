# Script: scaffold_tools.ps1
# Purpose: Batch create placeholder HTML files for all new tools based on tool-template.html

$tools = @(
    "apache-ii.html", "ards-berlin.html", "balthazar.html", "bisap.html", "dien-tich-bong.html", 
    "cam-icu.html", "checklists-er.html", "compliance.html", "cpis.html", "cpot.html", 
    "curb65.html", "cytokine-storm.html", "hacor.html", "hscore.html", "icdsc.html", 
    "marshall.html", "murray-lis.html", "news2.html", "pbw-vt.html", "qcsi.html", 
    "qsofa.html", "ranson.html", "sepsis-bundle.html", "shock-index.html", "sic-score.html", 
    "sofa.html", "loet-do-stress.html", "vap-bundle.html", "vip-score.html", "acuity.html", 
    "aub-has2.html", "cardiac-output.html", "chads-vasc.html", "crusade.html", "geneva.html", 
    "h2fpef.html", "hasbled.html", "hestia.html", "suy-tim-ca-the-hoa.html", "killip.html", 
    "ldlc.html", "orbit.html", "pesi.html", "rcri.html", "scai-shock.html", "score2.html", 
    "timi.html", "wells.html", "cat-score.html", "edlips.html", "phan-tich-khi-mau.html", 
    "rox-index.html", "ti-ratio.html", "cai-dat-may-tho.html", "abcd2-score.html", "aspects.html", 
    "fisher.html", "glasgow.html", "gos.html", "guss.html", "ich-score.html", "nihss.html", 
    "rankins.html", "aims65.html", "alvarado.html", "air-score.html", "child-pugh.html", 
    "fib4.html", "gbs.html", "gerdq.html", "glasgow-imrie.html", "meld.html", "mpi.html", 
    "oakland.html", "rockall.html", "akin.html", "cauti.html", "do-loc-cau-than.html", 
    "fena.html", "kdigo-aki.html", "rifle.html", "4tscore.html", "arc-hbr.html", "bat-score.html", 
    "compass-cat.html", "impede-vte.html", "improve.html", "isth-dic.html", "khorana.html", 
    "mascc.html", "padua.html", "plasmic.html", "tpe.html", "trip-cast.html", "villalta.html", 
    "apgar.html", "dich-sxh.html", "humpty-dumpty.html", "mis-c.html", "pews.html", "pas.html", 
    "pts.html", "rumack.html", "sipa.html", "add-rs.html", "asa.html", "caprini.html", 
    "last-lipid.html", "lrinec.html", "possum.html", "bacs.html", "braden.html", "candida.html", 
    "central-line.html", "charlson.html", "doilieu-corticoid.html", "dirc.html", 
    "tinh-toc-do-truyen.html", "duong-tho-kho.html", "glucose-control.html", "heparin.html", 
    "khang-sinh.html", "mcmahon.html", "morse.html", "nahco3.html", "natri-correction.html", 
    "nrs-nutrition.html", "suc-co.html", "bang-diem-atropin.html", "thang-dau.html", 
    "danh-muc-thuoc.html", "vancomycin.html", "wben.html", "acr-tirads.html", "ai-tirads.html", 
    "bmi.html", "coronavirus-anxiety.html", "karnofsky.html"
)

$template = "tool-template.html"
$count = 0

Write-Host "Bat dau tao placeholder cho cac cong cu moi..." -ForegroundColor Cyan

foreach ($file in $tools) {
    if (!(Test-Path $file)) {
        Copy-Item $template $file
        Write-Host " + Created: $file" -ForegroundColor Green
        $count++
    }
    else {
        Write-Host " - Skipped (Exists): $file" -ForegroundColor Gray
    }
}

Write-Host "Hoa thanh! Da tao $count file moi tu template." -ForegroundColor Yellow
