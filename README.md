# Curve Learner
An application for training ML models on annotated 1D signals (curves)

## Functionality
Here is a crude list of the functionalities **_Curve Learner_** should provide:
1. Ability to generate a dataset (a collection of 1D signal curves):
  * select a set of functions (with parameters) and choose the noise level in the data
  * all curves belonging to the same dataset must be of equal length (i.e. 100 points)
  * generate *n* curves this way
2. Store the generated dataset in a DB (postgress) under a *collection*:
  * each dataset has a name and it must belong to a collection
  * collection is owned by a user
3. Upload an external dataset:
  * input must be Excel/CSV file(s)
  * format the uploaded data so that the sizes fit
  * imput missing values using a number of methods: interpolation etc.
  * some basic signal processing: scaling, smoothing
4. Augment a dataset:
  * select a set of operations to apply to a curve (scale, add baseline, flip around an axis etc.)
  * set the operation parameters (likelihood/frequency, order, scale factor etc.)
  * apply to select curves *n* times (potentially all curves in a dataset) - produce the result
  * save the augmented curves either in a new dataset/collection or in the same dataset/collection
5. View and annotate the curves of a dataset/collection:
  * view available collections/datasets
  * select/load a dataset from a collection
  * select and display a single or multiple curves
  * create an annotation for the dataset: categorical (labels), numerical (values), positional (x value). A dataset can have multiple annotations
  * annotate a curve (or a group of curves) by selecting the desired annotation and then either entering the label/value in a designated field (if categorical/numerical) or clicking on the plot to get the x position (if positional)
  * save the annotations to the DB
6. Train an ML model (regressor/classifier) on a dataset to predict the value of a selected annotation:
  * with the dataset loaded select a ML model (random forest, fc. ANN, conv. ANN etc.)
  * set the training/validation/testing parameters: test size, cv, model parameters
  * perform the training and testing, display the results: accuracy/rmse etc.
  * do hyperparameter tuning using grid search - get best model
  * save the ML model to the DB (serialization/pickling)
7. Run a trained ML model on a datset:
  * load a dataset w/o annotations (select desired curves), select a trained model
  * predict the annotations and display the results
  * allow user to make changes to predicted annotations
  * either save the results to a dataset (potentially overwriting previous annot.) or discard
8. Retrain an existing model
9. Merge/split datasets
10. Add/rename/remove annotations
11. Dataset/collections management: CRUD
12. User management: registration/unregistration, login/logout
13. Collaboration datasets/collections: owner, readers, editors
