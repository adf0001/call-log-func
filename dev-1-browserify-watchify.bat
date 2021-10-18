rem test.htm @ npm

set watchifyPath="watchify.cmd"

set module=call-log-func

title watchify - %module%

if not exist ./debug md debug

for /F %%i in ('npm root -g') do ( set globalModulePath=%%i)

%watchifyPath% -o ./debug/bundle.debug.js -v ^
	-t [ "%globalModulePath%/stringify" --extensions [.html .css .htm ] ] ^
	-r ./package.json:_package_json ^
	-r ./%module%.js:%module%
