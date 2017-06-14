<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Laravel Quickstart - Basic</title>
        <!-- CSS And JavaScript -->

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    </head>

    <body>
        <div class="container">
            <p class="text-center">
                <p align="left">
                    <nav class="navbar navbar-default">
                        <a class="navbar-brand">
                            Task List
                        </a>
                    </nav>
                </p>
            </p>
        </div>

        @yield('content')
        @yield('edit')

    </body>
</html>