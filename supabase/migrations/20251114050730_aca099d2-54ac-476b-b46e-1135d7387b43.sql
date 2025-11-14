-- Initial schema setup for SkillSaarthi
-- This will trigger the auto-generation of TypeScript types

-- Create a simple health check function to initialize the schema
CREATE OR REPLACE FUNCTION public.health_check()
RETURNS boolean
LANGUAGE sql
STABLE
AS $$
  SELECT true;
$$;

-- Comment for documentation
COMMENT ON FUNCTION public.health_check() IS 'Simple health check function to verify database connectivity';
