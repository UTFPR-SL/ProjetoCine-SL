@echo off
@SET op=%1
@SET name=%2
    
if "%name%"=="" goto errNome
if "%op%"=="paginas" goto cop
if "%op%"=="sections" goto cop
if "%op%"=="components" goto cop
goto err


:cop
   
mkdir src\%op%\%name%
if "%ERRORLEVEL%"=="1" goto errExist
echo @import '../%op%/%name%/%name%.css'; >> src\settings\styleImports.css
echo $.getScript('../../%op%/%name%/%name%.js', function() {}); >> src\settings\javaImports.js


echo. > src\%op%\%name%\%name%.js


if "%op%"=="paginas" goto pag

echo $(function (^) { $("#%name%"^).load("../../%op%/%name%/%name%.html"^); }^); >> src\settings\%op%Imports.js
(
    echo .%name%{
    echo.
    echo }
) > src\%op%\%name%\%name%.css
(
    echo ^<div class="%name%"^>
    echo.
    echo ^</div^>
) > src\%op%\%name%\%name%.html

goto end


:pag
copy src\assets\templates\%op%.html src\%op%\%name%\%name%.html
echo. > src\%op%\%name%\%name%.js



goto end


:err
    echo ==============================
    echo            ERRO!
    echo      Parametro invalido.
    echo ==============================

goto end


:errNome
    echo ==============================
    echo            ERRO!
    echo        Nome em branco.
    echo ==============================

goto end

:errExist
    echo ==============================
    echo            ERRO!
    echo        Nome ja em uso.
    echo ==============================

:end