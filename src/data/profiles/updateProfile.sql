USE [student]
UPDATE [tblProfile]
SET [LastName] = @LastName,
    [FirstName] = @FirstName
WHERE [PersonID] = @PersonID;

SELECT * FROM [tblProfile] WHERE [PersonID] = @PersonID;