//automatically updates the years of the copyright
document
  .getElementById("footer")
  .append(
    "&copy;  Copyright " +
      new Date().getFullYear() +
      " AUBG OLYMPICS. All rights reserved."
  );
