function merge(ar1, ar2) {//unisce due array ordinati per valore
    var result = [];//array risultato
    var i1 = 0;//due indici
    var i2 = 0;

    while(i1 < ar1.length && i2 < ar2.length) {//finche' uno dei due array non rimane senza elementi
        if(ar1[i1] < ar2[i2]) {// se l'elemento del primo array e' minore
            result.push(ar1[i1]);   // inseriscilo nel result
            i1++;
        } else {
            result.push(ar2[i2]);   // senno inserisci l'elemento dell'altro array
            i2++;
        }
    }
    if (i1 < ar1.length) {//se il primo array e' quello di lunghezza maggiore concatenalo solamente
        result = result.concat(ar1.slice(i1))
    }
    if (i2 < ar2.length) {//stessa cosa per il secondo array
        result = result.concat(ar2.slice(i2))
    }

    return result;//ritorna l'array risultato
}

function mergeSort(myarray) {//ordinamento per merge
    if (myarray.length == 1) {//se l'array ha lunghezza 1 = ordinato
        return myarray;
    } else {
        var l = myarray.length / 2;//l diventa meta della dimensione dell'array
        var left = myarray.slice(0, Math.ceil(l));//crea due array usando slice da 0 a l e da l a fine array
        var right = myarray.slice(Math.ceil(l));//math ceil serve a portare a valore intero se il numero da dividere e' dispari
        return merge(mergeSort(left), mergeSort(right));// ritorna il merge dei due array
    }
}