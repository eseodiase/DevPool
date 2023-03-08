const CVMaker =()=>{
function Printin(){
            var divContents = document.querySelector("#dvContainer").innerHTML;
            var printWindow = window.open('', '', 'height=400,width=800');
            printWindow.document.write('<html><head><title>DIV Contents</title></head><body >');
            printWindow.document.write(divContents);
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.print();
    }
    
    return(
    <form id="form1">
    <div id="dvContainer">
        This content needs to be printed.
    </div>
    <input type="button" value="Print Div Contents" id="btnPrint" onClick={Printin} />
    </form>
    )
}

export default CVMaker;
