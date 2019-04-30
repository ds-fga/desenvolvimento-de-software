import pandas as pd


df = pd.read_csv('pnad2012.csv.gz', index_col=0)


print(df[['race', 'income']].groupby('race').mean())