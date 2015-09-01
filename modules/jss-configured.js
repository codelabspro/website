
import jss               from 'jss'
import jssNested         from 'jss-nested'
import jssVendorPrefixer from 'jss-vendor-prefixer'
import jssPx             from 'jss-px'
import jssExtend         from 'jss-extend'
import jssCamelCase      from 'jss-camel-case'
import jssPropsSort      from 'jss-props-sort'

// plugin order recommended by @kof
// (https://github.com/jsstyles/jss-camel-case/issues/1#issuecomment-129984620)
jss.use(jssNested)
jss.use(jssExtend)
jss.use(jssVendorPrefixer)
jss.use(jssCamelCase)
jss.use(jssPropsSort)
jss.use(jssPx)

export { jss }
export default jss
