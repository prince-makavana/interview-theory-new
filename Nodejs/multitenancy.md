# Advantages and Disadvantage of multitenancy

## Advantages
1) Costs - Multi tenant operation has lower cost per user due to resources being shared  
2) Efficiency: Since the environment is the same for each customer, onboarding new customers is a faster process.

## Disadvantages
1) Complexity - Serving multiple clients from one instance of application/database adds an extra level of complexity to the codebase and database maintenance
2) Backup - A multi-tenant environment makes backup and restoration more complex so not all providers offers reliable restoration service.
3) Global problem - If a technical problem occurs on providers end, it can lead to issues for all users.
4) Less customization - A multi-tenant environment offers fewers customizations, users have less control over the quality.