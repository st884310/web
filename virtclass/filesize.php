<!DOCTYPE html>
<?php
    function formatSizeUnits($filesize)
    {
        if ($filesize >= 1073741824)
        {
            $filesize = number_format($filesize / 1073741824, 2) . ' GB';
        }
        elseif ($filesize >= 1048576)
        {
            $filesize = number_format($filesize / 1048576, 2) . ' MB';
        }
        elseif ($filesize >= 1024)
        {
            $filesize = number_format($filesize / 1024, 2) . ' kB';
        }
        elseif ($filesize > 1)
        {
            $filesize = $filesize . ' bytes';
        }
        elseif ($filesize == 1)
        {
            $filesize = $filesize . ' byte';
        }
        else
        {
            $filesize = '0 bytes';
        }
        return $filesize;
    }
?>
