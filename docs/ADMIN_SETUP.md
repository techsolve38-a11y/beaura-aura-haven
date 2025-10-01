# Admin Setup Guide

## Making a User an Admin

To grant admin privileges to a user, you'll need to run a SQL query in your Lovable Cloud database.

### Steps:

1. **Sign up for an account** at `/auth` if you haven't already
2. **Open Lovable Cloud** using the "Manage Cloud" button
3. **Navigate to SQL Editor**
4. **Run the following query** (replace `user@email.com` with the actual email):

```sql
-- First, find the user's ID
SELECT id, email FROM auth.users WHERE email = 'user@email.com';

-- Then update their role to admin (replace USER_ID with the actual UUID)
UPDATE user_roles 
SET role = 'admin' 
WHERE user_id = 'USER_ID';
```

### Alternative: Direct Update

If you know the user's ID, you can update directly:

```sql
UPDATE user_roles 
SET role = 'admin' 
WHERE user_id = (
  SELECT id FROM auth.users WHERE email = 'user@email.com'
);
```

### Verify Admin Status

To verify that the user is now an admin:

```sql
SELECT 
  u.email,
  ur.role
FROM auth.users u
JOIN user_roles ur ON u.id = ur.user_id
WHERE u.email = 'user@email.com';
```

## Admin Features

Once a user has admin privileges, they can:

- Access the Admin Panel at `/admin`
- Add new products with images, prices, and descriptions
- Edit existing products
- Delete products
- Mark products as featured
- Manage product categories and availability

## Security Notes

- Admin status is checked server-side through RLS policies
- Regular users cannot modify their own roles
- All product management requires authentication and admin role verification
