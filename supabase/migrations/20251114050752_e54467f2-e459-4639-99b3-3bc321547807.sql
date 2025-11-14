-- Fix search_path security warning for health_check function
DROP FUNCTION IF EXISTS public.health_check();

CREATE OR REPLACE FUNCTION public.health_check()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT true;
$$;

COMMENT ON FUNCTION public.health_check() IS 'Simple health check function to verify database connectivity';
