
#include <stdio.h>
#include "hello.h"

#include "LiquidCrystal.h"
int main() {
  int b= a();
  return 0;
}
int a() {
  return 0;
}
const int rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);