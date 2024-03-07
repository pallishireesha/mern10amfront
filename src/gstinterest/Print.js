    export function openPrintWindow() {
        var printWindow = window.open('', '_blank');
        printWindow.document.write(document.getElementById('home').outerHTML);
        printWindow.document.close();
        printWindow.print();
    }

    export function openPrintWindow201819() {
        var printWindow = window.open('', '_blank');
        printWindow.document.write(document.getElementById('profile').outerHTML);
        printWindow.document.close();
        printWindow.print();
    }

  export function openPrintWindow201920() {
        var printWindow = window.open('', '_blank');
        printWindow.document.write(document.getElementById('messages').outerHTML);
        printWindow.document.close();
        printWindow.print();
    }

    export function openPrintWindow202021() {
        var printWindow = window.open('', '_blank');
        printWindow.document.write(document.getElementById('years').outerHTML);
        printWindow.document.close();
        printWindow.print();
    }

   export function openPrintWindow202122() {
        var printWindow = window.open('', '_blank');
        printWindow.document.write(document.getElementById('years202122').outerHTML);
        printWindow.document.close();
        printWindow.print();
    }

