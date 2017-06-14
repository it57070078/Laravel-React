<?php $__env->startSection('content'); ?>
    <div class="panel panel-info">
        <div class="panel-body">
            <?php echo $__env->make('commons.errors', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
            <form action="<?php echo e(url('task')); ?>"  method="POST" class="form-horizontal">
                <div class="form-group">
                        <h3><lable for="name">Task</label></h3>
                    <div class="col-xs-9">
                        <input type="text" name="name" id="task-name" class="form-control" placeholder="Input Text">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-3 col-sm-6">
                        <p align="right">
                            <button trpy="submit" class="btn btn-success active" >
                                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>Add task
                            </button>
                        </p>
                    </div>    
                </div>
                <?php echo e(csrf_field()); ?>

            </form>
        </div>
    </div>

    <?php if($tasks->count()): ?>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Current tasks</h3>
            </div>
            <div class="panel-body">
                <table class ="table table-striped">
                    <thead>
                        <th><h4>Task</h4></th>
                        <th>&nbsp;</th>
                    </thead>
                    <tbody>
                        <?php $__currentLoopData = $tasks; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $task): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <tr>
                                <td><?php echo e($task->name); ?></td>
                                <td>
                                    <form action="<?php echo e(url('task/'.$task->id.'/edit')); ?>"method="get">
                                        <?php echo e(csrf_field()); ?>

                                        <button type="submit" class="btn btn-warning btn-sm active">
                                            <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>Edit
                                        </button>
                                    </form>
                                        
                                    <form action="<?php echo e(url('task/' .$task->id)); ?>" method="post">
                                        <?php echo e(csrf_field()); ?>

                                        <?php echo e(method_field('DELETE')); ?>

                                        <button type="submit" class="btn btn-danger btn-sm active">
                                            <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>Delete
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </tbody>
                </table>
            </div>
        </div>
    <?php endif; ?>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>