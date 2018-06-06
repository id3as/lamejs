(
echo 'function lamejs() {'
browserify --list src/js/index.js  | grep lamejs | grep -v node_modules | xargs cat | grep -v -e 'common\..*;' -e 'require(' -e 'module.exports.*;$' | sed 's/^module.exports = {/var module_exports = {/';
echo 'L3Side.SFBMAX = (Encoder.SBMAX_s * 3);'
echo 'lamejs.Mp3Encoder = Mp3Encoder;'
echo 'lamejs.WavHeader = WavHeader;'
echo '}'
echo 'lamejs();'
)| grep -v -e '^\s*assert\s*(.*);' >lame.id3as.all.js
