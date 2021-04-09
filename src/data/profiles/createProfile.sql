USE [student]
INSERT INTO [tblProfile] ([LastName], [FirstName]) VALUES (@LastName, @FirstName);

SELECT * FROM [tblProfile] WHERE [PersonID] = SCOPE_IDENTITY();