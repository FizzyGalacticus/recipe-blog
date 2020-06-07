#!/usr/bin/env sh

THEME=$1
OPATH=src/themes/$THEME
CPATH=src/themes/$THEME.bak

mv $OPATH $CPATH
git submodule deinit -f -- $OPATH
rm -rf .git/modules/$OPATH
git rm -f $OPATH
rm -rf $CPATH