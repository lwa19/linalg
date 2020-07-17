## setting up workflowr for linalg
library(workflowr)

## setup the repository
setwd("~/Documents/GitHub/")
wflow_git_config(user.name = "Lijia Wang", user.email = "lwang19@uchicago.edu")
wflow_start("linalg", existing = TRUE)

## initialize the build of the website
wflow_build()
# wflow_view()
wflow_status()
setwd("~/Documents/GitHub/linalg/analysis/")
wflow_publish(c("index.Rmd", "about.Rmd", "license.Rmd"),
              "Publish the initial files for myproject")
wflow_use_github("lwa19")
wflow_git_push()

## subsequent pushes need to run:
wflow_publish()
wflow_git_push()

# initialize new Rmd files:
wflow_open("analysis/linear_transformation.Rmd")
