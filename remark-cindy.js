window.remark_cindy = {
    create: function(remark_opt, opt){
        var source_elem = document.getElementById('source');
        var source = source_elem.innerHTML;
        source = source
            .replace(/[零壹貳參肆伍陸柒捌玖囧]/g, function($0){
                var out = '';
                var code = $0.charCodeAt(0);
                while( code ){
                    switch( code % 10 ){
                        case 0: out = '零' + out; break;
                        case 1: out = '壹' + out; break;
                        case 2: out = '貳' + out; break;
                        case 3: out = '參' + out; break;
                        case 4: out = '肆' + out; break;
                        case 5: out = '伍' + out; break;
                        case 6: out = '陸' + out; break;
                        case 7: out = '柒' + out; break;
                        case 8: out = '捌' + out; break;
                        case 9: out = '玖' + out; break;
                    }
                    code = parseInt(code / 10, 10);
                }
                return '囧囧' + out;
            });
        if( opt.AnyChar )
            source = source
                .replace(/\\#x([0-9A-Fa-f]+);/g, function($0, $1){ return '\\#' + parseInt($1, 16) + ';' })
                .replace(/\\#(\d+);/g, function($0, $1){
                    var i, out = '';
                    for(i=0; i<$1.length; ++i){
                        switch( $1[i] ){
                            case '0': out += '零'; break;
                            case '1': out += '壹'; break;
                            case '2': out += '貳'; break;
                            case '3': out += '參'; break;
                            case '4': out += '肆'; break;
                            case '5': out += '伍'; break;
                            case '6': out += '陸'; break;
                            case '7': out += '柒'; break;
                            case '8': out += '捌'; break;
                            case '9': out += '玖'; break;
                        }
                    }
                    return '囧囧' + out;
                });
        source_elem.innerHTML = source;
        window.remark.create(remark_opt);
        var area = document.querySelector('.remark-slides-area');
        area.innerHTML = area.innerHTML
            .replace(/囧囧([零壹貳參肆伍陸柒捌玖]+)/g, function($0, $1){
                var i, code = 0;
                for(i=0; i<$1.length; ++i){
                    code *= 10;
                    switch( $1[i] ){
                        case '零': break;
                        case '壹': code += 1; break;
                        case '貳': code += 2; break;
                        case '參': code += 3; break;
                        case '肆': code += 4; break;
                        case '伍': code += 5; break;
                        case '陸': code += 6; break;
                        case '柒': code += 7; break;
                        case '捌': code += 8; break;
                        case '玖': code += 9; break;
                    }
                }
                return String.fromCharCode(code);
            });
    }
}
