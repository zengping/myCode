function tmpl() {

    function tempEngine(str) {
        return new Function('data',
            'var arr = []; var dataArr = []; if (data.length > 0) { dataArr = data } if (data.length == undefined) { dataArr.push(data); } for(var x in dataArr) { arr.push("' +
            str.replace(/[\r\t\n]/g, ' ')
            .replace(/"/g, '\\"')
            .replace(/{{=\s(\w{1,10}\.{1}\w{1,10})\s?}}/g, '");arr.push($1);arr.push("')
            .replace(/{{=\s(\w{1,10})\s?}}/g, '");arr.push(dataArr[x].$1);arr.push("')
            .replace(/{{each\((\w)+\,(\w{1,5})\)\s(\w{1,10}\.{1}\w{1,10}\.?\w{0,10}\.?\w{0,10}\.?\w{0,10})}}/g, '");for(var $1 in $3){var $2=$3[$1];arr.push("')
            .replace(/{{each\((\w)+\,(\w{1,5})\)\s(\w{1,10})}}/g, '");for(var $1 in dataArr[x].$3){var $2=dataArr[x].$3[$1];arr.push("')
            .replace(/{{\/each}}/g, '");}arr.push("')
            .replace(/{{if\s(\!?\w{1,10}\.{1}\w{1,10}\.?\w{0,10}\.?\w{0,10}\s?\>{0,1}\<{0,1}\!{0,1}\={0,3}\s?\w{0,10}\d{0,10}\s?)}}/g, '");if ($1) {arr.push("')
            .replace(/{{if\s(\!?\w{1,10}\s?\={0,2}\s?\w{0,10}\d{0,10}\s?)}}/g, '");if (dataArr[x].$1) {arr.push("')
            .replace(/{{else}}/g, '");}else{arr.push("')
            .replace(/{{\/if}}/g, '");}arr.push("') +
            '");}return arr.join("");'
        );
    }

    function menu(obj) {
        var func = tempEngine(`
            <li class="dropdown">

                <a data-toggle="dropdown" class="dropdown-toggle" href="javascript:void(0)">
                    {{= name}}
                    <i class="icon-arrow-down"></i>
                </a>

                <ul class="dropdown-menu animated slideInDown">
                    {{each(i,val) child}}
                        {{if val.isLast == 1}}
                            <li data-url="{{= val.url}}"><a href="javascript:void(0)">{{= val.name}}</a></li>
                        {{else}}
                            <li class="dropdown-header">{{= val.name}}</li>
                        {{/if}}
                        {{if val.child.length > 0 }}
                            {{each(j,valC) val.child}}
                                <li data-url="{{= valC.url}}"><a href="javascript:void(0)">{{= valC.name}}</a></li>
                            {{/each}}
                        {{/if}}
                        <li class="divider"></li>
                    {{/each}}
                </ul>

            </li>
        `);
        return func(obj);
    }

    return {
        "menu": function(obj) {
            return menu(obj);
        }
    };
}

export { tmpl };
